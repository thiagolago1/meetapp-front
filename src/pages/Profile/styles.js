import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;
  form {
    display: flex;
    flex-direction: column;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      & + input {
        margin-top: 10px;
      }
    }
    button {
      margin: 15px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.2s;
      &:hover {
        box-shadow: 0 0 12px rgba(249, 77, 106, 0.5);
        background: ${darken(0.03, '#F94D6A')};
      }
    }
    hr {
      margin: 20px 0;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;
