import React, {memo} from 'react';
import ProfileLayout from '../layout';

const ProfileSettings = memo(() => {
  return (
    <ProfileLayout>
      <p>ProfileSettings</p>
    </ProfileLayout>
  );
});
ProfileSettings.displayName = 'ProfileSettings';
export default ProfileSettings;
