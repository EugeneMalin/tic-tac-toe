import { Component } from "react";
import { IBase } from "./IBase";

/**
 * Points component interface
 */
export interface IPoint extends IBase {
    color: string;
    icon: Component;
}