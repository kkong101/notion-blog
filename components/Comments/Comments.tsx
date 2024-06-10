import * as React from 'react';
import { useState } from 'react';

import axios from 'axios';
import cs from 'classnames';
import { formatDistance } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useFormik } from 'formik';
import useSWR from 'swr';

import { ExtendedRecordMap } from '~/packages/notion-types';
import Giscus from './Giscuss';

interface CommentsProps {
  pageId: string;
  recordMap: ExtendedRecordMap;
}

const Comments = () => {
  return (
    <div className="notion-comments">
      <h2 className="notion-h notion-h1">댓글</h2>
      <Giscus />
    </div>
  );
};

export default Comments;
