import React from 'react';

interface CommonHeaderProps {
    heading?: string;
    handleViewChange: (view: 'grid' | 'tile') => void;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  heading,
  handleViewChange
}) => {
  return (
    <div className="bg-white shadow-sm p-3 mb-4 m-8">
      <div className="pb-0 page-title-box d-flex align-items-center justify-content-between flex-wrap">
        <div className="flex justify-between">
          <h4 className="text-xl font-semibold mb-1 flex flex-row items-center">{heading}</h4>
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <img src="/icons/grid.png" alt="grid-view" className='w-6 h-6' onClick={() => handleViewChange('grid')}/>
            <img src="/icons/tile-view.png" alt="tile-view" className='w-10 h-10' onClick={() => handleViewChange('tile')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
