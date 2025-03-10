'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import { UserCircleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add menu items for studio and User Profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="
            px-4
            py-2
            font-medium
            text-blue-600
            hover:text-blue-500
            border-blue-500/20
            rounded-full
            shadow-none
            [&_svg]:size-5
          "
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
