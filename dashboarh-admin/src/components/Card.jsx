import React from 'react';

import { twMerge } from 'tailwind-merge';

const Card = React.forwardRef(({ className, ...rest }, ref) => {
    return (
        <div
            ref={ref}
            className={twMerge(
                'rounded-lg border bg-card text-card-foreground shadow-sm',
                className
            )}
            {...rest}
        />
    );
});

Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...rest }, ref) => {
    return (
        <div ref={ref} className={twMerge('flex flex-col space-y-1.5 p-6', className)} {...rest} />
    );
});

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...rest }, ref) => {
    return (
        <h3 ref={ref} className={twMerge('text-2xl font-semibold leading-none tracking-tight', className)} {...rest} />
    );
});

CardTitle.displayName = 'CardTitle';

const CardContent = React.forwardRef(({ className, ...rest }, ref) => {
    return <div ref={ref} className={twMerge('p-6 pt-0', className)} {...rest} />;
});

CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardContent };