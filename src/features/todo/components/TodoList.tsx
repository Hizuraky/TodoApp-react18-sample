import * as React from 'react';
import clsx from 'clsx';
import { Todo, variants, innerVariants } from '../';
import { BiMessageDetail, BiCalendar } from 'react-icons/bi';
import { AiOutlineTags } from 'react-icons/ai';

export const TodoList: React.FC<Todo & { onClick?: () => void }> = ({
  title,
  schedule,
  comments,
  variant = 'blue',
  labels,
  onClick,
}) => (
  <div className="flex items-start cursor-pointer" onClick={onClick}>
    <div
      className={clsx(
        'w-5 h-5 rounded-full p-[3px] flex items-center justify-center mr-2',
        variants[variant]
      )}
    >
      <div className={clsx('w-full h-full rounded-full', innerVariants[variant])} />
    </div>
    <div>
      <h1 className="text-sm mb-2">{title}</h1>
      <div className="flex text-xs">
        {new Date(schedule) < new Date() && (
          <span className="text-blue-800 flex items-center mr-4">
            <BiCalendar size={15} className="mr-1" />
            <p>昨日</p>
          </span>
        )}
        {comments.length > 0 && (
          <span className="text-slate-500 flex items-center mr-4">
            <BiMessageDetail size={15} className="mr-1" />
            <p>{comments.length}</p>
          </span>
        )}
        {labels.length > 0 && (
          <span className="text-slate-500 flex items-center">
            <AiOutlineTags size={15} className="mr-1" />
            <span className="flex">
              {labels.map((label, i) => (
                <>
                  <p key={i}>
                    {label}
                    {i !== labels.length - 1 && ' / '}&nbsp;
                  </p>
                </>
              ))}
            </span>
          </span>
        )}
      </div>
    </div>
  </div>
);
