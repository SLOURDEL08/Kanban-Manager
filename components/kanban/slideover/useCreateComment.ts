import { useMutation } from '@tanstack/vue-query'
import { v4 as uuid } from 'uuid'
import { COLLECTION_COMMENTS, DB_ID } from '@/app.constants.js'

export function useCreateComment({ refetch }: { refetch: () => void }) {
    const store = useDealSlideStore()
    const commentRef = ref<string>('')
    const { mutate } = useMutation({
        mutationKey: ['add comments', commentRef.value],
        mutationFn: async () => {
            if (!commentRef.value || !store.card?.id) {
                throw new Error('Comment text or deal ID is missing')
            }
            
            const documentId = uuid()
            const documentData = {
                text: commentRef.value,
                deals: store.card.id  // Utilisez 'id' au lieu de '$id'
            }
            
            try {
                const response = await DB.createDocument(DB_ID, COLLECTION_COMMENTS, documentId, documentData)
                return response
            } catch (error) {
                console.error('Error creating document:', error)
                throw error
            }
        },
        onSuccess: () => {
            refetch()
            commentRef.value = ''
        },
        onError: (error) => {
            console.error('Mutation error:', error)
            // Vous pouvez ajouter ici une logique pour afficher l'erreur à l'utilisateur
        }
    })

    const writeComment = () => {
        if (!commentRef.value) return
        mutate()
    }

    return {
        writeComment,
        commentRef,
    }
}