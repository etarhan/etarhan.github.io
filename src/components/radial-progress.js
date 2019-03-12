import React, { useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const circleCalc = (inputSize, unit) => css`
  content: '';
  position: absolute;
  border-radius: 50%;
  left: calc(50% - ${inputSize / 2 + unit});
  top: calc(50% - ${inputSize / 2 + unit});
  width: ${inputSize + unit};
  height: ${inputSize + unit};
`;

const innerCircleCalc = (inputSize, unit) => css`
  content: '';
  position: absolute;
  border-radius: 50%;
  width: ${inputSize + unit};
  height: ${inputSize + unit};
`;


export default ({
  percent,
  size,
  ratioInner = 1.5,
  color = '#81ce97',
  backColor = '#e5e5e5',
  innerColor = '#f0f0f5',
  children,
  className,
}) => {
  const sizeNumber = size.match(/[0-9]+/)[0];
  const sizeUnit = size.match(/[A-Za-z]+/)[0];

  return (
    <>
      <div
        css={css`
          width: ${size};
          height: ${size};
          border-radius: 50%;
          background-color: ${percent > 50 ? color : backColor};
          position: relative;
          box-shadow: 0px 0px 15px -4px ${color};
        `}
        className={className}
      >
        <div
          css={css`
              ${innerCircleCalc(sizeNumber, sizeUnit)}
              clip: ${
                percent > 50
                  ? `rect(0, ${sizeNumber / 2 + sizeUnit}, ${size}, 0)`
                  : `rect(0, ${size}, ${size}, ${sizeNumber / 2 + sizeUnit})`
              };
          `}
        >
          <div
            css={css`
              ${circleCalc(sizeNumber, sizeUnit)}
              clip: ${
                percent > 50
                  ? `rect(0, ${size}, ${size}, ${sizeNumber / 2 + sizeUnit})`
                  : `rect(0, ${sizeNumber / 2 + sizeUnit}, ${size}, 0)`
              };
              background-color: ${percent > 50 ? backColor : color};
              transform: rotate(${(360 * parseInt(percent)) / 100}deg);
            `}
          />
        </div>
        <div
          css={css`
            ${circleCalc(sizeNumber / ratioInner, sizeUnit)}
            background: ${innerColor};
            text-align: center;
            display: table;
          `}
        >
          <div
            css={css`
              display: table-cell;
              vertical-align: middle;
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
