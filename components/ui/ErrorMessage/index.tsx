import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';

export const ErrorMessage = () => {
  return (
    <>
      <h2 className="text-gray-700 italic py-5 text-xl font-semibold text-center">
        Ocurrió un error mientras se cargaba la información.
      </h2>
      <ExclamationTriangleIcon className="h-20 w-20 text-yellow-600" />
    </>
  );
};
