import { CustomButton } from '../../components';
import Heading from './Heading';

export default function Me() {
  return (
    <div className="py-28 md:px-40">
      <div className="flex flex-row flex-wrap md:flex-nowrap md:gap-40">
        <div className="w-1/2 shadow-lg">video</div>
        <div className="w-1/2">
          <Heading num="2">A short introduction</Heading>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus eveniet adipisci similique dolor inventore quaerat atque a itaque,
            fuga officia voluptatum impedit. Debitis quos ducimus totam neque sequi distinctio quia quasi suscipit porro earum, omnis a saepe.
            Consequatur obcaecati iste culpa voluptate necessitatibus molestias illum exercitationem eligendi. Iste, nostrum?
          </p>
          <div className="mt-5">
            <CustomButton>Contact</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
