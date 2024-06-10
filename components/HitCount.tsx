import React from 'react';

const HitCount = () => {
  return (
    <a href="https://hits.seeyoufarm.com">
      <img
        style={{ display: 'block', margin: '0px auto' }}
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fblog.dockerfile.site&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Total hits&edge_flat=true"
      />
    </a>
  );
};

export default HitCount;
