import React from 'react';

export default function SpaceDiv({
  width = 1,
  height = 1,
  styles = {},
  children,
}: {
  width?: number;
  height?: number;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: width ?? '1px',
        height: height ?? '1px',
        transition: 'all 0.3s',
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
