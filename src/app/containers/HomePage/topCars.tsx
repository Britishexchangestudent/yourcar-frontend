import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { SCREENS } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import carService from "../../services/carService";
import { useDispatch, useSelector } from "react-redux";
import { setTopCars } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";

const TopCarsContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        px-4
        md:px-0
        mb-10
    `}
`;

const Title = styled.h2`
  ${tw`
        text-black
        text-3xl
        lg:text-5xl
        font-extrabold
    `}
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`;

const EmptyCars = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    text-base
    text-black
    p-10
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);

  console.log(`topCars`, topCars);

  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setIsLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log(`err`, err);
    });

    console.log(`cars `, cars);

    if (cars) setTopCars(cars);
    setIsLoading(false);
  };

  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
  ];

  // const isEmptyTopCars = !topCars || topCars.length === 0;

  const isEmptyTopCars = !cars || cars.length === 0;

  // const cars =
  //   (!isEmptyTopCars &&
  //     topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
  //   [];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  if (isEmptyTopCars) return null;

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show</EmptyCars>}

      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}
