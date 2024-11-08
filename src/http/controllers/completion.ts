import type { FastifyInstance } from 'fastify'
import { createNewCompletionRoute } from '../routes/create-new-completion'
import { getPendingCompletionsByManagerRoute } from '../routes/get-pending-completions'
import { approveCompletionRoute } from '../routes/approve-completion'
import { denieCompletionRoute } from '../routes/denie-completion'
import { getApprovedCompletionsByManagerRoute } from '../routes/get-approved-completions'
import { getCompletionsByManagerRoute } from '../routes/get-completions-by-maanger'

export async function completionRoutes(app: FastifyInstance) {
  app.register(createNewCompletionRoute)
  app.register(getPendingCompletionsByManagerRoute)
  app.register(getApprovedCompletionsByManagerRoute)
  app.register(getCompletionsByManagerRoute)
  app.register(approveCompletionRoute)
  app.register(denieCompletionRoute)
}
