import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .input-group-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .input-group.primary{
        margin-bottom: 1rem;
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="number"]{
            width: calc(100% - 21px);
            height: 2.2rem;
            border: 1px solid #D9D9D9;
            border-radius: 6px;
            padding: 2px 10px;
            color: #14213D;
            font-family: 'Livvic', sans-serif;
            font-size: 14px;
            background-color: #F7F5FB;
        }

        .input-check{
            font-family: 'Livvic', sans-serif;
            font-size: 14px;
            color: #14213D;
            line-height: 1;
            display: grid;
            grid-template-columns: 1em auto;
            gap: 0.5em;
            cursor: pointer;

            input[type="checkbox"]{
                background-color: #F7F5FB;
                margin: 0;
                font: inherit;
                color: currentColor;
                width: 1.2em;
                height: 1.2em;
                border: 0.12em solid currentColor;
                border-radius: 0.13em;
                transform: translateY(-0.08em);
                display: grid;
                place-content: center;
                cursor: pointer;
            }

            input[type="checkbox"]::before{
                content: "";
                width: .8em;
                height: .8em;
                transform: scale(0);
                transition:  120ms transform ease-in-out;
                box-shadow: inset 1em 1em currentColor;
                border-radius: 0.10em;;
            }

            input[type="checkbox"]:checked::before{
                transform: scale(1);
            }

            input[type="checkbox"]::disabled{
                color: #959495;
                cursor: not-allowed;
            }
        }

        span.error{
            color: crimson;
            font-family: 'Livvic', sans-serif;
            font-size: 13px;
            margin-top: 3px;
            margin-left: 5px;
        }
    }

    input{
        -webkit-appearance: none;
        appearance: none;
    }

    input:focus-visible{
        outline: none;
    }
`

export default GlobalStyled
