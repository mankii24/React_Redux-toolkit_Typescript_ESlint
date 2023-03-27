import { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SkeletonLoader.scss';

interface Props {
  contact?: boolean;
  skeletonWidth?: number;
  skeletonHeight?: number;
  skeletonCount?: number;
}

const SkeletonLoader: FC<Props> = ({
  contact,
  skeletonWidth,
  skeletonHeight,
  skeletonCount,
}) => (
  <SkeletonTheme baseColor="#d9d9d9" highlightColor="#fefefe">
    {contact && (
      <Skeleton
        duration={0.5}
        width={skeletonWidth}
        height={skeletonHeight}
        count={skeletonCount}
      />
    )}
  </SkeletonTheme>
);

export default SkeletonLoader;
