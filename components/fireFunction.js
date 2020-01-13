import { firebase, db } from '~/plugins/firebase'

function setVote(tag) {
  const category = db.collection(this.id).doc(tag)
  // eslint-disable-next-line no-unused-vars
  category.update({
    popularity: firebase.firestore.FieldValue.increment(1)
  })
}

async function getVote(tag) {
  const voteRef = db.collection(this.id).doc(tag)
  let votenum = -1
  await voteRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        voteRef.set({ popularity: 0 }, { merge: true })
        votenum = 0
      } else {
        votenum = doc.data().popularity
      }
    })
    .catch((err) => {
      console.log('Error getting document', err)
    })
  return votenum
}

export default { setVote, getVote }
