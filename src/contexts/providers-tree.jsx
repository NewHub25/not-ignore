export const buildProvidersTree = (componentsWithPros) => {
  const initialComponent = ({ children }) => <>{children}</>;
  return componentsWithPros.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return function Name({ children }) {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};
