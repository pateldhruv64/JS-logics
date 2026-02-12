import Contect from './Contect';
export default function Home(props) {
  return (
    <div className="h-132.5 flex flex-col items-center justify-center bg-blue-50">
      <Contect data1={props.data} />
    </div>
  );
}
