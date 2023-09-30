import { Card, CardBody, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface IMainPageProps {}

interface IData {
  id: string;
  name: string;
}
const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const [data, setData] = useState<IData[]>([]);
  const fetchData = async () => {
    const res = await axios.get(
      "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
    );
    if (res.status === 200) {
      const { data } = res;
      setData(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Text fontSize="2em">메인 페이지</Text>
      {data.map((item) => (
        <Card>
          <CardBody>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default MainPage;
