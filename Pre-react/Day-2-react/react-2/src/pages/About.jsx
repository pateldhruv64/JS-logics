export default function About(props) {
  return (
    <div className="h-132.5 flex flex-col items-center justify-center bg-blue-900">
      <center>
        <h1>
          <div>
            <h1>hellooooooo About</h1>
          </div>
          <strong>{props.data2}</strong>
          <strong>{props.datap}</strong>
        </h1>
      </center>
    </div>
  );
}
