<script>
</script>

<div class="px-4">
	<div class="flex">
		<div class="traffic-lights-container align-self-begin flex flex-row gap-2">
			<div>
				<button class="traffic-light close" />
			</div>
			<div>
				<button class="traffic-light minimize" />
			</div>
			<div>
				<button class="traffic-light maximize" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	$close-red: #ff6159;
	$close-red-active: #bf4942;
	$close-red-icon: #4d0000;
	$close-red-icon-active: #190000;

	$minimize-yellow: #ffbd2e;
	$minimize-yellow-active: #bf8e22;
	$minimize-yellow-icon: #995700;
	$minimize-yellow-icon-active: #592800;

	$maximize-green: #28c941;
	$maximize-green-active: #1d9730;
	$maximize-green-icon: #006500;
	$maximize-green-icon-active: #003200;

	$disabled-gray: #ddd;

	.traffic-lights-container {
		&:hover {
			.traffic-light {
				@apply transition-all ease-in-out duration-200;
			}
		}

		.traffic-light {
			@apply rounded-full;
			height: 12px;
			width: 12px;
			/** background: $disabled-gray; **/
		}

		.close {
			background: $close-red;
		}

		.minimize {
			background: $minimize-yellow;
		}

		.maximize {
			background: $maximize-green;
		}
	}
</style>
