import React from "react";

import {
  ColorChanger,
  CounterHook,
  ToggleText,
  InputName,
  LikeButton,
  FontSizeChanger,
  DarkModeToggle,
  SimpleList,
  CountdownTimer
} from "../hooks/useState";

export const Offers = () => {
  return (
    <div>

      <ColorChanger />
      <CounterHook />
      <ToggleText />
      <InputName />
      <LikeButton />
      <FontSizeChanger />
      <DarkModeToggle />
      <SimpleList />
      <CountdownTimer />
    </div>
  );
};
