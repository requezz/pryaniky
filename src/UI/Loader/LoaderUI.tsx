import { memo } from "react";
// @ts-ignore
import cls from "./LoaderUI.module.scss";
import { classNames } from "../../app/helpers/classNames";
import { Dimmer, Loader } from "semantic-ui-react";

interface ILoaderProps {
  className?: string;
}

export const LoaderUI = memo((props: ILoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    </div>
  );
});
