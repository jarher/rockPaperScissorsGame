export const callControllers = (controllers) => {
  controllers.forEach((obj) => {
    obj.params ? obj.controller(obj.params) : obj.controller();
  });
};
