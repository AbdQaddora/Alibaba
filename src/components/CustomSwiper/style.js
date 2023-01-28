import styled from "styled-components";

export const Style = styled.div`
.swiper-button-next{
    right: 0;
}

.swiper-button-prev{
    left: 0;
}
.swiper-button-disabled{
    opacity: 0;
}

@media (max-width:796px) {
    .swiper-button-next , .swiper-button-prev{
        display: none;
    }
}
`
