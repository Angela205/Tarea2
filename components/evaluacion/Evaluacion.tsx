import React from "react";
import { View } from "react-native";
import { SvgUri } from "react-native-svg";
import StarEmpty from "../StarEmpty";

export type EvalProps= {
    calificacion: number
}
const Evaluacion =(props: EvalProps)=>{
    return(
        <View>
            <StarEmpty/>
        </View>
    )

}

export default Evaluacion;