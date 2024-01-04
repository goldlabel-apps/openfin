import { fin } from "@openfin/core"
import React from 'react'
import * as Notifications from "@openfin/workspace/notifications"
import "@finos/fdc3"
import {
	Button,
	Card,
	CardContent,
 } from "@mui/material"

function View1() {
	async function showNotification() {
		await Notifications.create({
			platform: fin.me.identity.uuid,
			title: "Simple Notification",
			body: "This is a simple notification",
			toast: "transient",
			category: "default",
			template: "markdown"
		})
	}

	async function broadcastFDC3Context() {
		if (window.fdc3) {
			await window.fdc3.broadcast({
				type: 'fdc3.instrument',
				name: 'Microsoft Corporation',
				id: {
					ticker: 'MSFT'
				}
			})
		} else {
			console.error("FDC3 is not available")
		}
	}

	async function broadcastFDC3ContextAppChannel() {
		if (window.fdc3) {
			const appChannel = await window.fdc3.getOrCreateChannel("CUSTOM-APP-CHANNEL")

			await appChannel.broadcast({
				type: 'fdc3.instrument',
				name: 'Apple Inc.',
				id: {
					ticker: 'AAPL'
				}
			})
		} else {
			console.error("FDC3 is not available")
		}
	}

	return (
		<Card>
			<CardContent>
		<div className="col fill gap20">
			<header className="row spread middle">
				<div className="col">
					<h1>
						Navigation 
					</h1>
				</div>
				
			</header>
			<main className="col gap10 left">
				
						<Button onClick={() => showNotification()}>
							Show Notification
							</Button>
						<Button onClick={() => broadcastFDC3Context()}>
							Broadcast FDC3 Context
						</Button>

						<Button onClick={() => broadcastFDC3ContextAppChannel()}>
							Broadcast FDC3 Context on App Channel
						</Button>
				
			</main>
		</div>
		</CardContent>
		</Card>
	)
}

export default View1
