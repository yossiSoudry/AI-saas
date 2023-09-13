"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("727e3cc8-f75e-43bb-aa84-18403c708a9e");
  }, []);

  return null;
};