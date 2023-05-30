import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FirebaseCreatePostResponse } from '@src/app/admin/shared/interfaces/firebase-create-response.interface'
import { IPost } from '@src/app/admin/shared/interfaces/post.interface'
import { environment } from '@src/environments/environment'
import { map, Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	constructor(private readonly http: HttpClient) {}

	create(post: IPost): Observable<IPost> {
		return this.http
			.post<FirebaseCreatePostResponse>(
				`${environment.firebaseDbUrl}/posts.json`,
				post,
			)
			.pipe(
				map((response) => ({
					...post,
					id: response.name,
					date: new Date(post.date),
				})),
			)
	}

	getAll(): Observable<IPost[]> {
		return this.http.get(`${environment.firebaseDbUrl}/posts.json`).pipe(
			map((response: { [key: string]: any }) => {
				let i = 1
				return Object.keys(response).map((key) => ({
					...response[key],
					id: key,
					date: new Date(response[key].date),
					numberId: i++,
				}))
			}),
		)
	}
}
