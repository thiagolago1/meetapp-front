import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin: 50px auto;
  max-width: 900px;
  ul {
    margin-top: 40px;
    list-style: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fff;
    font-weight: bold;
  }
  button {
    border: 0;
    border-radius: 4px;
    padding: 10px 25px;
    background: #f94d6a;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    &:hover {
      box-shadow: 0 0 8px rgba(212, 64, 89, 0.8);
    }
    svg {
      margin-right: 10px;
    }
  }
`;

export const Loading = styled.p`
  align-self: center;
  text-align: center;
  margin-top: 50px;
  color: #fff;
  font-weight: bold;
`;

export const Meetup = styled.li`
  background: ${props =>
    props.past ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 4px;
  & + li {
    margin-top: 10px;
  }
  a {
    font-weight: bold;
    color: ${props => (props.past ? '#bbb' : '#fff')};
    height: 62px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    div {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      time {
        color: #999;
      }
    }
    svg {
      display: inline-block;
      margin-left: 20px;
    }
  }
`;
