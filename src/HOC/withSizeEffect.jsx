import { DivState } from "../divState";

export const withSizeEffect = (WrappedComponent) => {
  return (props) => (
    <DivState>
      <WrappedComponent {...props} />
    </DivState>
  );
};
