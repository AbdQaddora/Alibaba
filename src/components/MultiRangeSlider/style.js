import styled from "styled-components";

const Style = styled.div`
    margin: 16px 0;
    .slider {
        position: relative;
        width: 200px;
        height: 5px;
    }

    .slider__track,
    .slider__range,
    .slider__left-value,
    .slider__right-value {
        position: absolute;
    }

    .slider__track,
    .slider__range {
        border-radius: 3px;
        height: 5px;
    }

    .slider__track {
        background-color: ${props => props.theme.colors.blue100};
        width: 100%;
        z-index: 1;
        border-radius: 7px;
    }

    .slider__range {
        background-color: ${props => props.theme.colors.blue};
        z-index: 2;
    }

    .slider__left-value,
    .slider__right-value {
        color: #dee2e6;
        font-size: 12px;
        margin-top: 20px;
    }

    .slider__left-value {
        left: 6px;
    }

    .slider__right-value {
        right: -4px;
    }

    /* Removing the default appearance */
    .thumb,
    .thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .thumb {
        pointer-events: none;
        position: absolute;
        height: 0;
        width: 200px;
        outline: none;
    }

    .thumb--zindex-3 {
        z-index: 3;
    }

    .thumb--zindex-4 {
        z-index: 4;
    }

    .thumb--zindex-5 {
        z-index: 5;
    }

    /* For Chrome browsers */
    .thumb::-webkit-slider-thumb {
        background-color: #f1f5f7;
        border: none;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px #ced4da;
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }

    /* For Firefox browsers */
    .thumb::-moz-range-thumb {
        background-color: #f1f5f7;
        border: none;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px #ced4da;
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }

`

export default Style;