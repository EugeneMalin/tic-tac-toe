import { IComplexity } from "../../data/interface/IComplexity";
import { IMode } from "./IMode";
import { IRowSize } from "./IRowSize";
import { ISetting } from "./ISetting";
import { ISize } from "./ISize";

/**
 * Settings component options interface
 */
export interface ISettings extends ISetting, ISize, IRowSize, IComplexity, IMode {}
