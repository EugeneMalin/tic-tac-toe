import { ISetting } from "./ISetting";

/**
 * Complexity component interface
 */
export interface IComplexity extends ISetting {
    /**
     * Key name of complexity
     */
    complexity: number;

    /**
     * Complexity change handler
     */
    onComplexityChanged: (e: Event, complexity: number) => void;
}
