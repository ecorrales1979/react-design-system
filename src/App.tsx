import { Envelope, Lock } from 'phosphor-react';

import './styles/global.css';

import { Logo } from './Logo';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo width={150} height={150} />
        <Heading size="large" className="mt-4 mb-2">Ignite Lab</Heading>
        <Text size="large" className="text-gray-400">Login and start using</Text>
      </header>

      <form className="flex flex-col items-stretch gap-3 w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon><Envelope /></TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Enter your e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-4">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon><Lock /></TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="********" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="small" className="text-gray-200">Remember me for 30 days</Text>
        </label>
        <Button type="submit" className="mt-4">Enter</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="small">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Forgot your password?</a>
        </Text>
        <Text asChild size="small">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Don't have an account? Create one now!</a>
        </Text>
      </footer>
    </div>
  )
}
