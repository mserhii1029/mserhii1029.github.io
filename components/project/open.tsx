import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
interface OpenInt {
    link: string,
    name: string,
    detail: string,
    color: string,
    lang: string,
}

const OpenSource = (props: OpenInt) => {
  library.add(fab);

  const colorReturn = (color:string) => {
      if(color == 'red'){
        return 'bg-red-600'
      }
      if(color == 'blue'){
        return 'bg-blue-600'
      }
      if(color == 'yello'){
        return 'bg-yello-600'
      }
      if(color == 'bluesky'){
        return 'bg-blue-400'
      }
      if(color == 'greenlight'){
        return 'bg-green-400'
      }
      if(color == 'green'){
        return 'bg-green-600'
      }
  }

  return (
    <Link href={props.link}>
      <a target="_blank" className="bg-gray-900 rounded-md overflow-hidden hover:bg-gray-800 duration-300">
        <div className="mx-auto w-3/4 flex flex-col justify-between h-64">
          <div className="h3 mt-5">
            <FontAwesomeIcon
              className="mr-2"
              size="lg"
              icon={["fas", "book"]}
            />
            <h3 className="inline-block">{props.name}</h3>
          </div>
          <p className="text-sm">{props.detail}</p>
          <div className="mb-5 text-smm">
            <div className={`rounded-full h-4 w-4 ${colorReturn(props.color)} inline-block relative top-1`}></div>
            <span className="ml-1">{props.lang}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OpenSource;
