import { IPageProps } from './types';

function Page(props: IPageProps) {
  return <div>{props.children}</div>;
}

export default Page;
