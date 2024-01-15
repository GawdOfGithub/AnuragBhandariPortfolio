
import clsx from 'clsx';
import { PropsWithChildren } from 'react';





function Root({ children }: PropsWithChildren) {


  return (
    <div
      id="__root"
      className={clsx()}
    >
      {children}
    </div>
  );
}

export default Root;
