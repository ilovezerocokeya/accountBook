import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  //navigate(-1) : 뒤로가기

  const params = useParams();
  //현재 URL의 파라미터를 가져오는 데 사용됩니다.
  //이 문법을 사용하면, 컴포넌트가 렌더링될 때 URL에서 동적 세그먼트(예: /detail/:id에서 :id 부분)의 값을 가져와
  //params 객체에 저장합니다.
  //예를 들어, URL이 /detail/2일 경우 params 객체는 { id: '2' }가 됩니다.

  const data = [
    { id: 1, todo: "자바스크립트 공부!" },
    { id: 2, todo: "리액트 공부!" },
    { id: 3, todo: "타입스크립트 공부!" },
    { id: 4, todo: "NEXT.JS 공부!" },
  ];

  const targetItem = data.find((item) => item.id === Number(params.id));
  // data 배열에서 특정 조건을 만족하는 첫 번째 요소를 찾습니다.
  // 이 경우, 조건은 URL 파라미터와 data 배열 요소의 id가 일치하는지 여부입니다.

  //find 메서드에 전달된 콜백 함수의 본문입니다.
  //item은 data 배열의 각 요소를 순차적으로 나타냅니다.
  //params.id는 문자열 형태의 URL 파라미터입니다. Number(params.id)를 통해 이를 숫자로 변환합니다.
  //이 조건문은 각 item의 id와 params.id의 숫자 형태를 비교합니다. 일치하는 경우 해당 item이 반환됩니다.

  console.log("targetItem", targetItem);

  return (
    <div>
      {targetItem ? (
        <h3>현재 페이지는 : {targetItem.todo}</h3>
      ) : (
        <h3>해당 아이템을 찾을 수 없습니다.</h3>
      )}
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>할 일: {item.id}</div>
            <Link to={`/detail/${item.id}`}>
              <span>Go to : {item.todo}</span>
            </Link>
          </div>
        );
      })}
      <br />
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Home으로 가기
        </button>
      </div>
    </div>
  );
};

export default Detail;
