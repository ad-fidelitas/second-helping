import { IGraphService } from "../../../interfaces/IGraphService";

import { IDatabase } from "../../../interfaces/IDatabase";
import { IGoogleService } from "../../../interfaces/IGoogleService";

export const GraphService: (db: IDatabase, google: IGoogleService) => IGraphService =
(db: IDatabase, google: IGoogleService) => {
    // private functions here

    // public functions in the return module 
    return {

    }
}