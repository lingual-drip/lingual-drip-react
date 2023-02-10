import service from "../../commons/axiosService";

export const userStatisticService = async () => {
  try {
    const { data } = await service.get("/users/get-user-statistic");
    
    return data;
  } catch(error) {
    return 'no-token'
  }
};
