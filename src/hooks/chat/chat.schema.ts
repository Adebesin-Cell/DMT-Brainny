import { z } from "zod";

export const answerSourcesSchema = z
	.object({
		title: z.string(),
		url: z.string().nullable().optional(),
		folderId: z.string().nullable().optional(),
	})
	.refine((value) => value.url ?? value.folderId, {
		message: "Either url or folderId (or both) must be provided",
	});

export type AnswerSources = z.infer<typeof answerSourcesSchema>;

export const intermediateStepSchema = z.object({
	action: z.object({
		tool: z.string(),
		toolInput: z.any(),
		log: z.string(),
	}),
	observation: z.string(),
});

export const generateEventsSchema = z.enum([
	"FINAL_OUTPUT",
	"ANSWER_CHUNK",
	"ACTION",
]);

export const generateOutputSchema = z.object({
	search: z.string(),
	answer: z.string().optional(),
	answerSources: z.array(answerSourcesSchema),
	intermediateSteps: z.array(intermediateStepSchema).optional(),
	duration: z.number().nullable(),
	messageId: z.number().nullable(),
	chat: z
		.object({
			title: z.string(),
			id: z.string(),
			updatedAt: z.preprocess((v) => new Date(v as string), z.date()),
			createdAt: z.preprocess((v) => new Date(v as string), z.date()),
			userAddress: z.string().nullable(),
			deleted: z.boolean(),
			pinned: z.boolean(),
		})
		.optional(),
});

export type IntermediateStep = z.infer<typeof intermediateStepSchema>;
export type GenerateOutput = z.infer<typeof generateOutputSchema>;
