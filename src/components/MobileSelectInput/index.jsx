import React, { useEffect } from 'react'
import CustomSwiper from '../CustomSwiper'
import { Body1 } from '../Typography'
import { SelectOption } from './style'

const MobileSelectInput = ({ value, onChange, options, className = "" }) => {

    useEffect(() => {
        if (!value) {
            if (onChange) {
                onChange(options[0].value);
            }
        }
    }, [onChange, options, value]);

    return (
        <div className={className}>
            <CustomSwiper
                data={options}
                autoplay
                autoplayDelay={5000}
                slidesPerView={3.5}
                spaceBetween={5}
                breakPoints={[
                    { breakPoint: 920, slidesPerView: 3.5 },
                    { breakPoint: 720, slidesPerView: 3 },
                    { breakPoint: 450, slidesPerView: 2.8 },
                ]}
                renderSlide={(el) => <SelectOption
                    active={value === el.value}
                    key={el.value}
                    onClick={() => { onChange(el.value) }}>
                    <Body1 color="blue" align="center">
                        {el.text}
                    </Body1>
                </SelectOption>
                }
            />
        </div>
    )
}

export default MobileSelectInput