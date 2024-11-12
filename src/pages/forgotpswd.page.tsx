'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Key } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: ForgotPasswordValues) {
    setIsLoading(true)
    console.log(values)
    // Handle password reset logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    setIsLoading(false)
    router.push('/auth-verify')
  }

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4" style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__upload__20762-bM37lGVCw9FXESL3MqdezcgS1EcUHo.jpeg')"}}>
      <div className="w-full max-w-md">
        <Card className="w-full backdrop-blur-md bg-white/80">
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Forgot Password?</CardTitle>
            <CardDescription className="text-center">
              No worries, we'll send you reset instructions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Proceed'}
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Remember your password?{' '}
              <button onClick={() => router.push('/')} className="text-primary hover:underline">
                Back to login
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}