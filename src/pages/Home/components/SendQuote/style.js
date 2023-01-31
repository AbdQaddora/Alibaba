import styled from "styled-components";
import send_requests from '../../../../assets/images/home/send_requests.png';

const Style = styled.div`
    background-image: url(${send_requests});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 4px;
    padding: 40px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .form{
        textarea{
            margin-top: 12px;
            height: 80px;
        }
        
        .quantity{
            margin: 12px 0;
            display: flex;
            gap: 10px;
            .select__quantity{
                width: 30%;
            }
        }
    }
    @media (max-width:920px) {
        grid-template-columns: 1fr;
        .form{
            display: none;
        }
    }
`

export default Style;