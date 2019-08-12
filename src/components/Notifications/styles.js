import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #fff;
        content: '';
        border-radius: 50%;
      }
    `}
`;

const listWidth = 320;
export const NotificationList = styled.div.attrs(props => ({
  className: props.visible ? 'active' : '',
}))`
  z-index: 1;
  position: absolute;
  width: ${listWidth}px;
  left: calc(50% - ${listWidth / 2}px);
  top: calc(100% + 30px);
  background: #fff;
  border-radius: 12px;
  padding: 10px 5px;
  display: none;
  transition: opacity 0.3s ease-out;
  opacity: 0;
  height: 0;
  &.active {
    display: block;
    opacity: 1;
    height: auto;
  }
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #fff;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #7159c1;
  padding: 10px 0;
  border: 0;
  background: none;
  & + div {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  ${props =>
    props.unread &&
    css`
      & button::after {
        content: '';
        display: inline-block;
        margin-left: 10px;
        width: 8px;
        height: 8px;
        background: #7159c1;
        border-radius: 50%;
      }
    `}
`;
