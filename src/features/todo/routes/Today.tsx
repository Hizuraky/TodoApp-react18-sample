import * as React from 'react';
import clsx from 'clsx';
import { Todo } from '../../todo';
import { TodoList } from '../components/TodoList';

const data: Todo[] = [
  {
    title: 'Todoist の基本を簡単なガイドで学ぼう [スタート ガイド]',
    description: '',
    schedule: 'Sun Nov 20 2022 01:19:12 GMT+0900',
    variant: 'lime',
    labels: ['読む', '急ぎ'],
    comments: [
      {
        date: 'Sun Nov 20 2022 01:19:12 GMT+0900',
        text: 'コメントコメントコメント',
      },
      {
        date: 'Sun Nov 20 2022 01:19:12 GMT+0900',
        text: 'コメントコメントコメント',
      },
    ],
  },
  {
    title: 'Todoist の基本を簡単なガイドで学ぼう [スタート ガイド]',
    description: '',
    schedule: 'Sun Nov 20 2022 01:19:12 GMT+0900',
    variant: 'purple',
    labels: ['買う'],
    comments: [],
  },
  {
    title: 'Todoist の基本を簡単なガイドで学ぼう [スタート ガイド]',
    description: '',
    schedule: 'Sun Nov 22 2022 01:19:12 GMT+0900',
    variant: 'cyan',
    labels: [],
    comments: [
      {
        date: 'Sun Nov 20 2022 01:19:12 GMT+0900',
        text: 'コメントコメントコメント',
      },
    ],
  },
  {
    title: 'Todoist の基本を簡単なガイドで学ぼう [スタート ガイド]',
    description: '',
    schedule: 'Sun Nov 20 2022 01:19:12 GMT+0900',
    variant: 'orange',
    labels: [],
    comments: [
      {
        date: 'Sun Nov 20 2022 01:19:12 GMT+0900',
        text: 'コメントコメントコメント',
      },
    ],
  },
];

export const Today = () => {
  const date = new Date();
  return (
    <section>
      <div className="flex w-full justify-between mb-4">
        <span className="flex items-baseline">
          <h1 className="text-lg font-semibold mr-2">今日</h1>
          <p className="text-xs text-gray-500">
            {date.getMonth() + 1}月{date.getDate()}日
          </p>
        </span>
        <p className="text-gray-500">表示</p>
      </div>
      <div>
        {data.map((todo, i) => (
          <div key={i} className={clsx('mb-2 border-b pb-4 pt-2', i === 0 && 'border-t')}>
            <TodoList {...todo} />
          </div>
        ))}
      </div>
    </section>
  );
};
