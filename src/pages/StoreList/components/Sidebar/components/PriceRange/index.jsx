import React, { useState } from 'react'
import { Input } from '../../../../../../components/common';
import MultiRangeSlider from '../../../../../../components/MultiRangeSlider';
import Button from '../../../../../../components/Button';
import { Body1 } from '../../../../../../components/Typography';
import Style from './style'

const MIN = 0;
const MAX = 1000;

const PriceRange = () => {
    const [minVal, setMinVal] = useState(MIN);
    const [maxVal, setMaxVal] = useState(MAX);

    // !WHY THIS IS NOT WORKING
    // const handelMinInput = (e) => {
    //     if (e.target.value >= MIN && e.target.value < MAX && e.target.value < maxVal) {
    //         setMinVal(e.target.value)
    //     }
    // }

    // const handelMaxInput = (e) => {
    //     if (e.target.value > MIN && e.target.value <= MAX && e.target.value > minVal) {
    //         setMaxVal(e.target.value)
    //     }
    // }
    return (
        <Style>
            <MultiRangeSlider
                min={MIN}
                max={MAX}
                minVal={minVal}
                maxVal={maxVal}
                setMinVal={setMinVal}
                setMaxVal={setMaxVal}
            />

            <div className="inputs">
                <div>
                    <Body1>Min</Body1>
                    <Input value={minVal} disabled />
                </div>
                <div>
                    <Body1>Max</Body1>
                    <Input value={maxVal} disabled />
                </div>
            </div>

            <Button
                varient={"secondary"}
                fullWidth
            >Apply</Button>
        </Style>
    )
}

export default PriceRange