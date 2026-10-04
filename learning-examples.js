// Original illustrative scenarios, attached by stable track/topic rather than question position.
const learningExamples=new Map();
function addLearningExamples(track,rows){for(const row of rows.trim().split('\n')){const [topic,example]=row.split('|');const q=learningBank.find(q=>q.track===track&&q.topic===topic);if(!q||!example||learningExamples.has(q.id))throw Error('Invalid or duplicate example '+track+': '+topic);learningExamples.set(q.id,{text:example});}}
addLearningExamples('ios',`
Swift values vs references|Copy a Cart struct, then edit the copy's quantity. The original value stays independent; two references to one class share its identity.
ARC and retain cycles|A controller stores a completion closure that captures self. Neither releases until you change ownership, for example with weak capture.
Structured concurrency|Load profile and preferences with two child tasks. Leaving the parent operation cancels child work; an unstructured Task needs explicit lifetime management.
Actors and reentrancy|An actor checks stock, awaits payment, then resumes after another request changed stock. Revalidate the reservation before committing.
MainActor and Sendable|Decode a response away from UI-bound work, transfer an immutable model, then publish the screen's state through MainActor isolation.
SwiftUI state ownership|A screen owns its editable draft in State. A child text field receives a Binding so it edits the same draft.
SwiftUI identity and effects|A row keyed by a fresh UUID on every render loses its toggle state. Key it by the product's stable ID.
iOS performance and testing|Launch profiling shows synchronous image decoding before the first frame. Defer it, then compare cold-start measurements on the same device.
Protocols|A ProfileRepository protocol lets a ViewModel use a fake repository in tests and the network-backed repository in production.
Existentials|An any Renderer value can hold different conforming types. A some Renderer return hides one concrete type chosen by the implementation.
Enums|Model checkout as loading, ready(cart), failed(error), or paid(receipt). Switching over cases makes missing states visible during compilation.
Escaping closures|A networking callback runs after the method returns. Treat its captures as long-lived and decide whether the screen should remain retained.
Error handling|A timed-out request offers retry, while an invalid address highlights the form. Map distinct errors to distinct recovery actions.
Codable|The server sends snake_case field names and an optional avatar. Configure decoding deliberately and test missing, null, and malformed values.
Copy-on-write|Two arrays initially share storage internally. Mutating one preserves value semantics, but copying a large array can still become costly on mutation.
Property wrappers|A property wrapper centralizes validation or storage behavior. Its wrapped access can perform work, so inspect semantics rather than assuming a plain field.
Access control|Expose a feature's public entry point while keeping helper types internal. Another module cannot depend on those implementation details.
Dependency injection|Inject a Clock and repository into a retrying service. Tests advance fake time and return controlled failures without real sleeps.
Cancellation|The user types a second search query. Cancel the previous request and reject its late result so old data cannot overwrite new results.
Task groups|Fetch thumbnails concurrently with a bounded number of child operations. Aggregate results and define how one failure affects the group.
Continuations|Wrap a callback API in a continuation. Resume exactly once for success or failure; a double callback must not double-resume it.
AsyncSequence|Consume progress events with for await, update UI state, and stop the owning task when the user cancels the download.
URLSession|A profile request checks HTTP status before decoding. A 401 JSON error body must not be mistaken for a successful profile.
Retries|Retry a transient read failure with backoff. Do not blindly retry creating an order unless the server supports a stable idempotency key.
Background transfer|Persist the upload identity and reconnect session callbacks after relaunch. The system transfer result still needs backend finalization checks.
Keychain|Store a refresh token in Keychain rather than preferences. Choose accessibility behavior based on whether legitimate background access is required.
Secure Enclave|Create a supported hardware-protected signing key. Use its public key remotely; do not treat it as storage for arbitrary application secrets.
Persistence|A draft survives app restart because it was saved to disk. Keeping it only in a ViewModel would lose it after process termination.
Core Data concurrency|A background context imports records and saves. Pass object IDs or mapped values across contexts instead of sharing managed objects unsafely.
Delete rules|Deleting a folder may cascade its notes or nullify their folder relationship. Choose the rule based on whether notes must survive.
Schema migration|Add a required field to existing customer records with a defined default. Test upgrading a populated older store, not just a clean install.
UIKit lifecycle|Create one-time UI setup in viewDidLoad, then refresh visibility-dependent behavior when the controller appears. Reappearance should not duplicate setup.
Cell reuse|A reused cell first shows product B while product A's image finishes later. Verify the represented item ID before applying that image.
Diffable snapshots|Use product IDs as identifiers and update the snapshot after a price change. Two items with the same ID cannot coexist as distinct entries.
Geometry|Place a button relative to safe-area insets rather than assuming the top edge is unobstructed. Test rotation and different device sizes.
Auto Layout|A long translated title conflicts with fixed widths. Adjust constraints and priorities, then inspect ambiguous or unsatisfiable layouts.
SwiftUI layout|An HStack proposes space to its children. A large text view can change the result; test dynamic type and avoid hard-coded frame assumptions.
Navigation|Store route data as stable identifiers. On restoration, load the current authorized record instead of persisting an obsolete screen object.
UIKit interoperability|A representable wraps a UIKit component and its coordinator forwards callbacks. Update configuration without recreating long-lived delegates unnecessarily.
Combine lifetime|Store a subscription for the feature lifetime and cancel it when finished. A discarded cancellable can stop updates immediately.
Debounce and throttle|Debounce search until typing pauses. Throttle frequent progress updates so the UI redraws at a controlled rate.
Collection transforms|Use map to convert prices to labels, compactMap to drop failed optional conversions, and filter to retain available products.
Async tests|A fake repository returns a known profile. Await the operation and assert loading becomes success without relying on an arbitrary delay.
UI tests|Launch signed out, complete login, and open account details. Use stable accessibility identifiers instead of fragile screen coordinates.
Accessibility|An icon-only delete button has a descriptive accessibility label. Verify VoiceOver order and that larger text does not hide the action.
Localization|A sentence with a count uses plural rules. Do not concatenate translated fragments whose word order differs between languages.
Universal links|A verified HTTPS product link launches the product route. Signed-out users complete login before loading authorized product details.
Push delivery|Treat a push as a hint that an order changed. Fetch its current authorized state because the notification may be delayed or absent.
Background scheduling|Request a refresh task and save progress on expiration. The requested start is not a guarantee that work runs at that exact time.
Delivery diagnostics|Match a crash report's build UUID with the uploaded symbols. Symbols from another build cannot reliably decode that stack.
`);
addLearningExamples('android',`
Coroutines and dispatchers|A suspend function performs blocking file reads. Move that work to an appropriate dispatcher so calling it from the UI remains main-safe.
Coroutine cancellation|A CPU loop keeps running after the screen closes unless it checks cancellation. Ensure cleanup runs and do not swallow CancellationException.
Flow and StateFlow|A database Flow represents query updates. A StateFlow holds the current loading/result state so new UI collectors immediately see the latest screen state.
Compose state|A search field uses rememberSaveable for a small query string. Persist actual search results elsewhere if they must survive process termination.
Compose effects|LaunchedEffect(userId) loads data when the identity changes. Ordinary recomposition must not start another request for the same user.
Room and offline-first|The screen observes Room while a worker refreshes its rows. Airplane mode still shows cached records with an explicit stale/sync status.
Hilt and module boundaries|A feature depends on a repository interface. Hilt supplies the API-backed implementation without exposing network details to the screen.
Process death and performance|Rotation preserves a ViewModel, but killing the process removes it. Restore the query from saved state and durable records from storage.
Null safety|An avatar URL may be null. Display a placeholder with safe access instead of using a non-null assertion that can crash.
Data classes|Copy a Product with a different price. Remember that nested mutable objects are still shared unless deliberately copied.
Equality|Two separate data-class values with equal fields compare structurally with ==. Reference identity uses === and answers a different question.
Sealed models|Represent login as Idle, Loading, Success, or Error. An exhaustive when handles every permitted result shape.
Inline functions|A small higher-order helper can inline its lambda. Consider code growth and public API rules rather than assuming all inlining improves performance.
Extensions|An extension formats a Money value without changing its class. Extension resolution is static and does not add virtual instance behavior.
launch and async|Use launch for a fire-and-report operation. Use async when a caller must await a returned result, with deliberate failure ownership.
Supervision|Independent avatar and recommendation requests can fail separately under supervision. Handle each failure rather than silently discarding it.
Mutex|Two coroutines update an in-memory counter. Protect the read-modify-write section with a Mutex; individually reading/writing is not an atomic increment.
Flow operators|Filter invalid events, map records to UI models, and use distinctUntilChanged where meaningful. Operator choice changes what downstream receives.
Flow context|Move expensive upstream processing with flowOn. The UI collector still needs its intended lifecycle and dispatcher behavior.
Sharing|Two UI consumers observe one shared expensive source. Choose when it starts/stops and what replay a later subscriber needs.
Lifecycle collection|Stop UI collection when the screen is not active, then resume. Durable outcomes should remain in state rather than vanish as one-time events.
Navigation arguments|Pass an order ID to the details screen, not a large object graph. Load and authorize the latest order when the screen starts.
State hoisting|A parent owns checkbox state and receives onCheckedChange. The child renders that state without creating a conflicting second owner.
derivedStateOf|Show a scroll-to-top control only when a list crosses a threshold. Derive that boolean rather than reacting equally to every scroll position.
Compose stability|A frequently recreated mutable model can complicate skipping. Use well-defined immutable state and measure recomposition before adding annotations.
Lazy-list keys|Key rows by message IDs. Inserting a message at the top should not transfer another row's remembered state to it.
Rendering phases|A visual offset can sometimes be read in a later phase. Profile whether changes trigger composition, layout, or drawing before optimizing.
Compose tests|Find a button through its semantics and perform a click. Assert the visible state rather than internal implementation calls.
WorkManager|Enqueue unique sync work constrained to available network. Retried execution uses an idempotent operation ID so one action is not applied twice.
Alarm scheduling|A user-facing precise alarm and a deferrable sync job have different API/policy needs. Confirm exact-alarm eligibility rather than using it for routine refresh.
Foreground service|An eligible ongoing activity may require a foreground service with visible notification. A service does not bypass all background restrictions.
Permissions|When camera access is denied, keep the rest of the form usable. Explain how to grant access later instead of repeatedly prompting.
Room transactions|Insert an order header and its lines in one transaction. If a line fails, avoid leaving a partially saved order.
Migrations|Add a column and populate old rows with a valid default. Run migration tests against a database produced by the prior schema.
Paging|Switch from one search query to another while loading. Ensure old pages cannot enter the new query's list.
Hilt tests|Replace the real payment repository with a fake test binding. The production screen can be exercised without a live payment service.
Gradle performance|Measure configuration and task execution separately. Verify that a cache improvement works for representative local and CI builds.
R8|A reflection-based serializer needs correct preservation configuration. Test the minified release because debug can hide missing classes or names.
ANRs|A slow synchronous database operation blocks the main thread. Inspect traces, move blocking work, and verify responsiveness under load.
Memory leaks|A singleton retains an obsolete Activity after rotation. Inspect the retained-reference path and replace it with appropriate lifetime ownership.
SavedStateHandle|Save a small selected-tab or record ID. Reload the record from persistent storage rather than placing an entire database in saved state.
App links|Verify the app-domain association for an HTTPS route. Parse parameters and authorize the resource after the OS resolves the link.
Notification channels|Create separate order and promotion channels. Users can disable promotions without losing order notifications.
Accessibility|A custom icon exposes a meaningful role, label, and touch target. Test TalkBack and large font settings.
Adaptive UI|Use a list/detail arrangement on a large window and one pane on a small one. Preserve selection while the window size changes.
Networking tests|A fake HTTP server returns 401, timeout, and malformed JSON. Assert bounded refresh/retry behavior and useful error state.
Coroutine tests|Use a test dispatcher and virtual time to test a debounce. Advance the scheduler instead of sleeping for real seconds.
Keystore|Protect a supported cryptographic key through Android Keystore. Preferences containing ciphertext still need a correct key and recovery design.
DataStore|Store a small theme preference in DataStore. Use a database for relational records rather than forcing them into preference storage.
Release readiness|Test a signed, minified build with previous-version data. Verify push, permissions, symbols, and critical transactions before rollout.
`);
addLearningExamples('rn',`
JSI and the bridge|A native method accesses the JS runtime through JSI rather than serialized bridge messages. The method still needs correct ownership, threading, and validation.
Fabric pipeline|Changing a component's props leads to a new shadow tree, layout/commit work, and native-view mounting. Profile the specific stage causing delay.
TurboModules and Codegen|Define a typed getBatteryLevel spec and generate interfaces. Implement validation and stable errors in both native platforms.
Threading and sync calls|A synchronous native image-processing call blocks its caller for 200 ms. Use a suitable asynchronous design for expensive work.
Hermes and profiling|Startup improves after reducing JS initialization, even with Hermes already enabled. The engine cannot remove application work you still execute.
List performance|A feed janks because every row decodes a large image and rerenders on selection. Measure row work and image sizes before tuning windows.
Native lifecycle|A module retains the previous Activity after recreation. Release lifecycle-owned references and clean up listeners when the module invalidates.
New Architecture migration|Upgrade a native-heavy app in a branch, check dependency compatibility, and exercise startup, push, camera, and release builds before staged rollout.
State immutability|Create a new array when adding a todo. Mutating the existing array and reusing its reference can hide the intended state change.
Effect dependencies|A profile-loading effect depends on userId. Missing that dependency can leave account A's profile visible after switching to account B.
Refs|Keep a timer handle in a ref so updates do not trigger rendering. Clear the timer when its owner unmounts.
Memoization|An expensive derived list is recalculated on unrelated changes. Memoize only after measuring and ensuring dependencies remain correct.
Context|A large context changes on every keystroke and rerenders unrelated consumers. Split responsibilities or choose a more targeted subscription design.
TypeScript boundaries|An API response typed as Product is still untrusted JSON. Validate required fields at runtime before treating it as a valid domain model.
Type narrowing|Check result.kind before reading success-only fields. A discriminated union guides access to fields actually present in that branch.
Nullish coalescing|A quantity of zero is valid. Use a nullish default rather than an OR default that incorrectly replaces zero.
JS event loop|A long synchronous sort delays input and timers. Promise scheduling does not make the CPU work run in a separate thread.
Promises|Use Promise.all when both requests must succeed. Handle independent results deliberately when one failure should not discard the other.
State stores|Keep a local modal toggle in component state and shared session identity in the chosen store. Avoid duplicating ownership of one source of truth.
Query caches|Cache keys include the user and query parameters. Clear or partition account-scoped entries so switching users does not reveal old private data.
Navigation|Pass a product ID in route parameters. Load the latest data instead of passing a stale large product object through navigation.
AppState|When the app returns to active state, reconcile missed chat events. Do not assume a background socket remained alive throughout suspension.
Credential storage|Use an appropriate native secure-storage integration for refresh credentials. AsyncStorage is not a secure secret vault by itself.
Offline queue|Persist a pending message with a stable operation ID. A retry after restart should not create a second server message.
Animation paths|A drag animation can execute through the selected native/worklet path. Check architecture compatibility and avoid heavy cross-boundary calls per frame.
Gestures|A vertical list and horizontal swipe compete for input. Configure gesture relationships and test cancellation on both platforms.
Image memory|A small avatar displays a huge source image. Request/downsample to the required size and measure decoded memory, not just compressed file size.
List keys|Use message IDs rather than array indices. Inserting at the beginning should not move another row's local state to a different message.
List geometry|Provide fixed item layout only when row sizes truly match the model. Variable text heights can make incorrect offsets jump to the wrong location.
Accessibility|An icon button needs an accessible name and adequate hit area. Test screen readers, focus order, and dynamic text sizes.
Keyboard layout|A login button becomes hidden behind the keyboard. Test platform-specific insets and scrolling instead of assuming identical keyboard behavior.
Component tests|Render a search component, enter text, and assert its visible results. Mock the boundary while preserving meaningful user behavior.
Native E2E|A device test grants camera access and takes a photo. A JS-only component test cannot prove native permission and camera integration work.
Metro|A monorepo import resolves an unexpected duplicate package. Inspect Metro resolution and dependency layout rather than hiding the error with arbitrary aliases.
Monorepos|Two packages pull different copies of a singleton library. Align dependencies and resolution so runtime identity stays consistent.
Native linking|Installing a native camera package changes the binary. Rebuild the native app; refreshing the JS bundle cannot add the native implementation.
Codegen spec|Expose typed progress events and a cancellable operation. Generated bindings still require consistent native implementation and teardown behavior.
Native components|A Fabric component receives typed size/color props. Ensure native updates reflect new values and release view-owned resources.
Native events|A module emits Bluetooth updates. Subscribe once per owner and remove the subscription on teardown to avoid duplicate handlers.
JSI ownership|A native object retains a runtime pointer after that runtime is destroyed. Tie resource lifetime to runtime invalidation and documented ownership.
Binary data|Sending a large image as base64 adds encoding and allocation overhead. Evaluate file handles or supported binary interfaces for the actual boundary.
Bundle growth|A small feature imports an entire utility package. Inspect the delivered bundle and compare a narrower import or dependency removal.
Source maps|A production crash points to minified code. Upload the source map for that exact bundle/version to recover useful locations.
Release profiling|A list appears slow in development but behaves differently in release. Profile the delivered configuration on representative devices.
OTA compatibility|A JS update calls a native method missing from an older binary. Limit delivery to a compatible runtime or ship a new native build.
Platform differences|Android back navigation and iOS swipe dismissal differ. Implement the intended user journey while respecting each platform's behavior.
Permission abstraction|A shared camera service returns granted, denied, or limited capability where relevant. Native platform rules still determine the underlying result.
Error boundaries|A child render throws and the boundary shows recovery UI. An unrelated rejected network promise needs separate error handling.
Startup phases|Measure native startup, JS initialization, and first useful content separately. Optimizing the wrong phase can leave perceived startup unchanged.
Upgrade and CI|Upgrade RN together with compatible native dependencies, then build signed release artifacts and test critical journeys in CI/device checks.
`);
addLearningExamples('architecture',`
Offline sync|An offline note is saved locally with a pending operation ID. Reconnection sends it once and reconciles the server's accepted version.
Authentication|Ten API calls receive an expired-session response. Share one refresh operation, then retry under a bounded policy or transition to sign-in.
API evolution|A newer server adds an optional field while older installed apps continue decoding. Avoid making old-client compatibility depend on immediate upgrades.
Mobile security|A rooted-device check is only one signal. The backend still authorizes every order request rather than trusting the client UI.
Performance budgets|Set a measurable startup target and track the first useful screen. Defer optional SDK initialization when it exceeds the agreed budget.
Observability|Attach a request ID to a failing checkout. Correlate app, gateway, and service diagnostics without logging credentials or payment details.
Feature flags and release|Roll out a new checkout to a small cohort. A kill switch disables eligible behavior while compatible older binaries remain installed.
Platform architecture|Two product teams share authentication contracts and UI tokens, while their feature-specific domain logic remains independently owned.
Requirements|For a chat design, ask about offline sending, media, user scale, message ordering, and delivery status before choosing a transport.
Quality attributes|A medical field app may prioritize offline availability over immediate freshness. Make that tradeoff explicit and measurable in its design.
Data boundaries|The API's address DTO maps to a validated domain Address. A server naming change does not spread through every screen.
Repository design|A ProductRepository offers domain-oriented reads while hiding whether records came from cache or network. It also exposes freshness/failure semantics.
State machines|An upload moves from queued to uploading to completed or failed. Reject impossible transitions such as completed directly from uninitialized.
CQRS|A local read model renders orders quickly while a command path records mutations. Define how command success updates the read model.
Conflict resolution|Two devices edit the same note version. Use the domain's merge policy or show a conflict instead of silently choosing arbitrary last arrival.
Idempotency keys|A timed-out create-order request retries with the same key. The server returns the original outcome rather than creating a second order.
Sync cursors|The client persists a server cursor after applying a delta. On restart it requests changes after that cursor, with an expiry/resync policy.
Deletion sync|A deleted record sends a tombstone/version. Otherwise an offline device may upload its stale copy and resurrect the record.
Optimistic UI|A like appears immediately but the server rejects the operation. Reconcile the count and show a useful recovery state.
Pagination|A server cursor identifies the next page for one query. Changing filters resets that query's cursor and excludes previous responses.
Upload design|A large video uploads in resumable chunks. Persist server-acknowledged offsets and verify finalization before declaring success.
Download integrity|A downloaded package is checked against trusted integrity metadata before use. An incomplete file must never be marked usable.
Cache policy|Cache public catalog data longer than sensitive account state. Include freshness, invalidation, logout, and storage-limit rules.
Single flight|Five screens request the same missing profile at once. Share one in-flight read and deliver its result to interested consumers.
Backoff|After repeated network failure, retry with increasing delay and jitter. Avoid making every client retry at the same instant.
Circuit breakers|A failing recommendation service trips a breaker. Show cached/basic content while limiting calls until a controlled recovery probe.
Timeout budgets|A checkout has a total deadline. Give its subrequests compatible limits so nested retries cannot exceed the user-visible budget.
Push reconciliation|Three order pushes arrive out of order. Fetch current order state or apply version checks rather than treating delivery order as truth.
Realtime transport|A foreground socket supplies live updates, while cursor-based replay recovers disconnections and push prompts later refresh when suspended.
Deep-link trust|A link points to someone else's receipt. Validate the route, then let backend authorization reject access to that resource.
Experiments|Assign users consistently to a checkout cohort. Compare conversion and guardrail errors without switching variants during the same journey.
Privacy-aware analytics|Measure onboarding completion with a coarse event. Avoid sending entered passwords, full addresses, or unnecessary raw personal fields.
SLOs|Define successful checkout rate over a window and agreed exclusions. A dashboard of average latency alone misses failed transactions.
Crash grouping|Group crashes by stable stack/build context, then inspect device and OS patterns. One raw error count can hide distinct regressions.
Startup budget|Authentication restoration blocks useful UI. Render a safe initial state and defer nonessential work while measuring perceived startup.
Memory budget|A feed retains decoded full-resolution photos. Cap caches and downsample images, then test under realistic memory pressure.
Battery budget|A sensor feature scans continuously despite no active use. Reduce scan duration and choose supported background behavior.
Dependency graph|A checkout module imports analytics, networking, and payment internals directly. Introduce deliberate contracts to reduce coupling where useful.
Design system governance|A shared button changes accessibility behavior. Version the component and coordinate adoption with owners instead of silently breaking screens.
Feature ownership|One team owns notification routing contracts and incident response. Document how feature teams register destinations and report failures.
SDK versioning|A plugin removes a public method in a major change. Consumers need migration guidance and a supported compatibility window.
Dependency supply chain|Review a dependency's provenance, license, permissions, and transitive packages. Pin and scan the actual resolved artifacts.
Test strategy|Unit-test conflict rules, integrate repository persistence, and device-test push taps. Each layer checks a different failure boundary.
Failure injection|Drop network after upload finalization but before the response arrives. Verify that retry recovers the original result rather than duplicating it.
Compatibility matrix|Test old/new app binaries against supported backend versions. Include persisted-data upgrades and important device/OS combinations.
Architecture reviews|Review an ADR comparing polling and sockets against battery, freshness, reliability, and operational cost, with explicit assumptions.
Build-vs-buy|Compare a messaging SDK with a custom transport using required features, data control, team capacity, ongoing costs, and exit strategy.
Architecture showcase|Present an offline-sync diagram, a conflict demo, measured results, and why the chosen policy fits the product requirement.
Ecommerce case study|Design cart, stock reservation, payment, and order confirmation as separate responsibilities. Explain retries and partial-failure recovery.
Platform migration|Move teams to a new networking layer behind a compatible interface. Track adoption and retire the old path only after critical clients migrate.
`);
addLearningExamples('cloud',`
AWS architecture|A mobile API runs across independent failure domains with durable storage and monitored recovery. Pick services from requirements, not a list of logos.
API gateway and authorization|The gateway validates a token, but the order service also checks whether that identity owns the requested order.
Queues and idempotency|A worker receives the same queued notification twice. A durable operation ID prevents a duplicate downstream business action.
Database selection|Choose relational storage for transactional order relationships or a key-oriented store for known access patterns. Validate the needed consistency and queries.
Reliability|One instance fails during checkout. Healthy instances continue while durable records let retried requests recover accepted outcomes.
Caching and CDN|A CDN serves versioned public images. Private account responses need explicit authorization-aware cache behavior rather than public caching defaults.
AWS IAM|An upload worker can write only the required object prefix. It does not need administrative permissions for unrelated services.
Certification readiness|After studying queues, build a lab and explain duplicate delivery and visibility timeouts without looking at notes.
Shared responsibility|The cloud provider operates infrastructure, while your team still configures identity, application access, data handling, and secure workloads.
Regions and zones|Deploy across availability zones to address a zone failure. A full-region outage requires a separate deliberate recovery design.
VPC|Private database resources sit within the application's network boundary. Route tables and access rules determine which paths actually work.
Public subnets|A route to an internet gateway does not by itself make every resource publicly reachable. Addressing and security controls still matter.
Security groups|Allow database traffic only from the application security group. Avoid broad inbound rules when a narrower source meets the requirement.
NAT|A private workload needs outbound access to an external API. NAT can provide a path, with cost and availability implications to evaluate.
Compute choice|A bursty short-lived handler may suit functions, while a long-running specialized worker may suit containers. Compare runtime and operational constraints.
Lambda state|Two invocations may use different execution environments. Persist durable session/business state outside process-local memory.
Cold starts|A rare endpoint includes heavy initialization. Measure first-invocation latency and reduce startup work before assuming one remedy always applies.
Autoscaling|Queue backlog grows faster than workers process it. Scale against relevant throughput/backlog signals while respecting downstream capacity.
Load balancing|Distribute requests among healthy instances. Application state should not require every request to return to one failing instance.
API Gateway options|A simple HTTP API and a bidirectional WebSocket service have different connection and routing requirements. Select the appropriate supported API type.
OAuth and OIDC|OAuth authorizes access to a service. OIDC supplies an identity layer; validate intended token type and claims for the use case.
PKCE|A native app creates a verifier and sends its challenge during authorization. The code exchange proves possession of that verifier.
JWT|Reject a token with the wrong issuer, audience, signature, or expiry. Decoding its JSON alone does not validate identity.
Presigned uploads|The backend authorizes a scoped upload URL. The app uploads within its allowed parameters before expiry, then finalizes the resource.
S3 storage|Store large media objects separately from transactional metadata. Define object access, lifecycle, versioning, and deletion behavior.
CloudFront|Use versioned asset URLs for static media. Test invalidation and origin behavior rather than assuming all responses can share one cache policy.
RDS|An order update needs a transactional set of relational writes. Plan connection limits, indexes, backups, and failure recovery.
DynamoDB keys|A user-orders query needs a suitable partition/sort-key access pattern. A poorly chosen key can create costly scans or hot partitions.
Transactions|Save an order and its inventory adjustment under the required atomicity contract. A remote payment still needs distributed recovery reasoning.
Redis|Cache a computed catalog response with an expiry. The durable database remains the authoritative source unless a different contract is intentional.
SQS visibility|A worker takes longer than the visibility window, so another consumer can receive the message. Adjust handling and keep effects idempotent.
Dead-letter queues|Repeatedly failing messages move to a controlled failure path. Inspect the cause before redriving them with the same broken inputs.
FIFO queues|Use message groups for required ordering scopes. Do not infer globally exactly-once business effects from queue-level deduplication.
SNS and events|Publish one order event to independent subscribers. Each consumer needs its own retry, schema, and idempotency strategy.
Event schemas|Add an optional field while older consumers continue working. Version incompatible meaning changes and plan consumer migration.
Distributed workflows|Payment succeeds but fulfillment fails. A workflow records progress and applies the business-approved compensation or retry.
Infrastructure as code|Review a versioned network change before deployment. Automated recreation still requires safe secrets handling and state management.
Secrets management|Retrieve service credentials through an authorized runtime path. Do not commit them into a repository or bake them into mobile binaries.
Encryption|Encrypt stored objects and secure transport, then control who can decrypt. Encryption does not replace resource authorization.
Backups|Restore a backup into an isolated environment and verify records. A successful backup job alone does not prove recovery works.
RTO and RPO|A recovery goal allows 30 minutes of downtime and at most 5 minutes of data loss. Choose/test a design that supports those hypothetical targets.
Observability signals|A trace identifies a slow database span, metrics show its frequency, and redacted logs provide diagnostic context.
Rate limiting|A burst of retries exceeds service capacity. Enforce scoped limits and return useful retry guidance without causing a synchronized retry storm.
Cost allocation|Tag environments and owners, then compare media egress, compute, and storage by feature. Overall spend alone does not identify the driver.
Deployment strategies|Send a small percentage of traffic to a new service version. Expand only when error and latency guardrails remain acceptable.
Health monitoring|A process is alive but cannot serve database-dependent requests. Distinguish liveness from readiness without making checks harmful.
Multi-region|Define traffic routing, replicated-data consistency, and failover ownership before adding a second region. More regions add coordination costs.
Backend for frontend|A mobile-oriented endpoint combines data needed by one screen. It should preserve domain authorization rather than become an unrestricted proxy.
GraphQL|A flexible query can trigger excessive resolver work. Enforce authorization and bounded query cost, and inspect N+1 fetching.
Architecture labs|Build a small API with a queue, inject a duplicate message, then explain logs, idempotency, cost, and recovery observations.
`);
addLearningExamples('ai',`
LLM boundaries|A model confidently invents a refund rule. Validate against approved evidence and decline unsupported answers rather than trusting fluency.
Structured outputs|A response follows a JSON schema but contains an impossible price. Schema validity and business-rule validity require separate checks.
RAG|A support question retrieves authorized policy passages before generation. Verify retrieval relevance independently from the generated answer.
Tools and agents|An assistant proposes cancelling an order through a tool. Validate authorization, arguments, and required human approval before execution.
Prompt injection|A retrieved page says to reveal secrets. Treat page text as untrusted data, not authority to change system behavior.
Evaluation|Test representative correct, ambiguous, and adversarial cases. Track task success and failure severity rather than one cherry-picked demo.
Streaming and mobile UX|Render an answer incrementally while allowing cancellation. Do not execute a tool from incomplete streamed arguments.
On-device versus cloud AI|A private offline classification task may favor on-device inference; larger workloads may need cloud capacity. Measure quality, latency, and battery.
Tokens|A long chat plus documents exceeds the allowed input budget. Reserve output space and trim irrelevant context rather than blindly truncating evidence.
Context windows|A large context capacity can hold more text but does not guarantee every detail is used correctly. Evaluate relevant-evidence recall.
Sampling|Lower randomness may make outputs more consistent, but it cannot guarantee factual correctness or eliminate unsupported claims.
Model choice|Compare candidate models on your actual extraction examples, including invalid input, latency, and cost. Pick from measured requirements.
Prompt structure|Separate trusted instructions, output format, and untrusted document content. Ask for the specific task rather than a vague comprehensive analysis.
Few-shot examples|Provide examples of accepted invoice extraction and a missing-field case. Keep examples representative instead of teaching accidental shortcuts.
Grounding|An answer about policy includes evidence from the approved current document. A plausible statement without support should be flagged or omitted.
Embeddings|Store vectors for authorized knowledge chunks and retrieve nearby candidates. Similar vectors indicate representation similarity, not proven truth.
Similarity metrics|Keep the index/query metric and normalization compatible. Changing those assumptions can reorder retrieval results unexpectedly.
Chunking|A refund condition is split away from its exception. Adjust chunk boundaries or overlap so retrieval preserves the necessary context.
Metadata filters|Filter search candidates to the user's tenant and allowed documents before exposing content. Do not rely on generation to hide unauthorized text.
Hybrid retrieval|A product code matches exact lexical search while a paraphrased question benefits from semantic search. Combine and evaluate both signals.
Reranking|Retrieve a broad candidate set, then rerank for the query. Measure whether better evidence justifies added latency and cost.
Index freshness|A policy changed yesterday but the index contains an old version. Track document versions and delete obsolete chunks deliberately.
Citations|A link exists, but the linked passage does not support the claim. Check claim-evidence alignment rather than just citation presence.
Conversation memory|Retain the user's confirmed preferences, not every raw message forever. Separate remembered facts from speculative summaries.
Tool schemas|A shipping tool accepts only a validated order ID and supported action. Reject unknown fields or malformed arguments at the boundary.
Tool outputs|A search tool returns text containing new instructions. Preserve it as untrusted evidence and validate structured results before reuse.
Agent loops|An agent keeps retrying a failing lookup. Bound iterations, time, and cost, then return an honest incomplete result.
Agent state|Persist a resumable workflow checkpoint and operation IDs. A restart should not repeat an already executed external action.
MCP|A tool server exposes capabilities with its own trust and permission boundary. A discovered tool still requires authorized, validated use.
Human review|An assistant drafts a consequential action and shows its exact effect. Execution waits for the required authorized review.
Indirect injection|A repository file includes instructions to send credentials elsewhere. Ignore the embedded command while using relevant file content as data.
Output safety|Generated SQL or shell text is reviewed and constrained before any execution. Model output is not executable authority by itself.
Data minimization|A summarization request removes account numbers that are unnecessary for the task. Keep retention and logging equally scoped.
Evaluation datasets|Keep held-out cases from real task distributions, with appropriate redaction. Include errors and long-tail inputs, not only easy examples.
Deterministic checks|An extracted date must parse, required IDs must exist, and totals must satisfy arithmetic. Validate these properties without asking a model to guess.
Judge models|A model judge likes verbose answers even when evidence is weak. Calibrate against human-labeled examples and inspect disagreement.
Regression testing|A prompt change improves common cases but breaks missing-field handling. Compare both before promoting the new version.
Latency budgets|Retrieval, reranking, and generation all consume time. Measure end-to-end perceived latency and cancellation rather than optimizing one stage blindly.
Caching|Reuse an answer only under compatible query, evidence version, and authorization scope. A cross-tenant cache can expose private information.
Cost budgets|Limit retrieved context and agent iterations for a routine question. Track per-success cost rather than merely total token volume.
Rate-limit handling|A provider returns a rate-limit error. Use bounded backoff, respect retry guidance, and avoid multiplying retries across layers.
Fallback models|A fallback can handle a simpler task but needs its own validation. Do not silently lower quality for a consequential decision.
Multimodal inputs|A photo contains a visible defect plus irrelevant text. Validate supported formats and evaluate visual accuracy with representative images.
Speech UX|A spoken command may be transcribed incorrectly. Show confirmation for ambiguous or consequential actions and allow correction.
Mobile model resources|An on-device model fits disk but exceeds runtime memory under load. Measure peak memory, startup, thermal behavior, and energy.
Model updates|A new model changes extraction behavior. Run the same held-out evaluation and stage promotion with rollback criteria.
User feedback|A thumbs-down is a useful signal but not a definitive correctness label. Collect appropriate context and review patterns.
Observability|Record redacted task/version identifiers, latency, validation failures, and cost. Avoid logging unnecessary complete user documents.
Abstention|The authorized corpus contains no answer to a warranty question. State the missing evidence instead of inventing a policy.
Showcase|Demonstrate retrieval, one failure case, evaluations, and measured latency/cost. Explain what the prototype can and cannot support.
`);
addLearningExamples('staff',`
Architecture decisions|An ADR compares polling and sockets against freshness, battery, reliability, and team capacity. Record why the choice fits current constraints.
Disagreement|A teammate prefers a rewrite. Agree on success criteria, compare migration risks with evidence, and document the decision and review point.
Mentoring|A developer struggles with debugging race conditions. Pair on one real bug, then let them lead the next diagnosis with feedback.
Incidents|Checkout failures rise after a release. Stabilize service first, assign clear investigation owners, and communicate verified impact and next update.
Influence without authority|Three teams adopt a shared token-refresh contract because a prototype and incident data demonstrate its value, not because you manage them.
Technical debt|A brittle parser causes repeated support issues. Prioritize its replacement using failure cost and migration effort rather than calling all old code bad.
STAR stories|Describe the situation, your responsibility, concrete actions, and observed outcome. Separate your contribution from the team's combined result.
Mobile Platform Lab|Build an offline-sync demo with reproducible failures, tests, and diagrams. Explain tradeoffs instead of showing only a polished happy path.
Staff scope|Improving one screen is valuable, but a Staff narrative also explains how you enabled reliable delivery across several teams.
Technical strategy|Choose a few platform investments tied to product needs and measured bottlenecks. Define sequencing, ownership, and what will wait.
Ambiguity|A request to make the app faster becomes specific after measuring startup, scrolling, and checkout. Clarify the user outcome before solution design.
Stakeholder alignment|Product wants a launch date while security needs a control. Make risks and scope options visible, then agree on an owned delivery decision.
RFC design|An RFC includes context, options, compatibility, migration, risks, and unresolved questions. Invite targeted feedback before implementation hardens assumptions.
Meeting effectiveness|Send a decision document before a review. End with a recorded decision, owner, and due date rather than another ambiguous discussion.
Delegation|Give a developer an outcome, constraints, and review checkpoints. Let them choose implementation details while making escalation paths clear.
Mentorship plans|Agree on one skill goal and a practical project. Review progress from evidence such as improved test design or independent debugging.
Feedback|Describe an observed behavior and its impact, then invite their perspective. Avoid labeling the person's character or guessing motives.
Cross-team dependencies|A backend API blocks mobile rollout. Track a contract, delivery owner, fallback plan, and milestone rather than relying on informal promises.
Roadmap prioritization|Rank observability, build speed, and feature work against expected user/team impact and urgency. Make capacity and deferred work explicit.
Estimation|Estimate with assumptions and ranges for uncertain integration work. Revisit when a prototype reveals missing native capabilities.
Scope control|For a fixed launch, preserve essential login and checkout while deferring optional animations. Document quality constraints that still must hold.
Risk registers|A vendor SDK may miss platform support. Assign an owner, early compatibility spike, trigger date, and replacement option.
Production ownership|Define who watches rollout metrics, responds to failures, and maintains runbooks. Ownership continues after the merge.
Postmortem quality|Explain contributing conditions and failed defenses, then assign measurable improvements. Blame-focused accounts hide system weaknesses.
Incident communication|State confirmed impact, mitigation, and when the next update will arrive. Mark uncertainty instead of inventing a recovery time.
Performance narratives|Explain the measured bottleneck, the change, and before/after results under comparable conditions. Include costs or regressions you checked.
Migration narratives|Describe how old/new paths coexisted, how adoption was measured, and how failures were contained during a platform change.
Failure stories|Discuss a design that underperformed, the evidence, and how you changed course. Show learning without shifting responsibility to others.
Conflict stories|Explain a disagreement's shared goal, the evidence exchanged, and the resolved decision. Avoid portraying colleagues as unreasonable obstacles.
Influence evidence|Show adoption across teams, fewer duplicate integrations, and feedback from users of the platform. A document alone does not prove influence.
Business language|Translate an ANR reduction into fewer interrupted user journeys, while stating what the data actually supports.
Engineering metrics|Pair build time and deployment frequency with reliability and user outcomes. One easily optimized metric can distort behavior.
Build-time investment|A cache improvement saves repeated developer waits. Measure representative builds and compare saved time with maintenance cost.
Hiring signals|Ask a candidate to reason through an unfamiliar failure. Evaluate clarity, correctness, tradeoffs, and verification rather than memorized terms alone.
Interview calibration|Two interviewers score the same sample response against a shared rubric. Discuss disagreements before evaluating more candidates.
Resume positioning|Write a bullet with the problem, your action, and supported outcome. Avoid inflated titles or invented numerical impact.
Case-study sanitation|Replace private customer identifiers and internal secrets in a public diagram. Keep enough technical detail to explain the decision.
Portfolio depth|Show one well-explained offline architecture with tests and failures. Many unexplained screenshots offer less evidence of engineering judgment.
Referrals|Send a concise role match and relevant work evidence to an authorized contact. Make it easy to assess the fit honestly.
Role selection|Compare a role's expected scope, platform ownership, and growth with your goals. A title alone does not describe daily responsibility.
Architecture leadership|Facilitate a shared decision and enable teams to implement it. Leadership includes support, migration, and feedback after the review.
Standards exceptions|A feature needs an exception to a shared persistence pattern. Record the reason, constraints, owner, and when to revisit it.
Technical governance|Define lightweight decision rights and escalation paths. Avoid requiring every local change to wait for a central committee.
Deprecation|Announce a replacement API, provide migration guidance, measure remaining consumers, and remove the old path only under an agreed policy.
Onboarding|A new engineer runs a small feature locally using a maintained guide. Capture the first setup failure and improve the path.
Distributed collaboration|Write context and decisions where teammates in other time zones can respond. Use live discussion for issues that need rapid interaction.
Saying no|Explain why a requested feature would compromise the committed outcome, then offer a smaller option or a later milestone.
Learning strategy|Pick a gap such as BLE recovery and build a device-based exercise. Review results instead of collecting links indefinitely.
Weekly review|Compare completed work with intended outcomes, identify one blocker, and choose a realistic next-week focus.
Promotion evidence|Keep an ongoing record of scope, cross-team outcomes, feedback, and decisions. Relate evidence to the organization's actual expectations.
`);
addLearningExamples('dsa',`
Complexity|Scanning n elements once is O(n); comparing every pair is O(n²). State auxiliary space separately from returned output.
Hash maps|For [2,7,11] and target 9, store 2's index, then find it as 7's complement. Expected lookup is constant time under map assumptions.
Sliding window|For abba, move the left bound past the repeated b. The longest distinct substring has length 2; left must never move backward.
Binary search|Search 7 in [1,3,5,7,9]: inspect 5, discard its left half, then inspect 7. Keep inclusive or half-open bounds consistent.
BFS and DFS|In an unweighted graph, BFS explores distance layers to find the fewest edges. DFS can reach a longer route first.
Heaps and intervals|Keep a min-heap of size 2 to select [9,7] from [9,2,7]. For overlaps, sort intervals and merge [1,3] with [2,4].
Dynamic programming|For amount 6 with coins [1,3,4], dp[6] is 2 using 3+3. Greedy 4+1+1 uses more coins.
Interview execution|Before implementing Two Sum, clarify whether the answer needs indices, whether duplicates exist, and what happens when no pair matches.
Two Sum|Input [2,7,11,15], target 9 returns indices [0,1]. Check the complement before insertion to avoid reusing one element.
Duplicates|Insert [1,2,1] into a set while scanning. The second 1 is already present, so return true.
Anagrams|listen and silent have matching character counts. Normalize only under the problem's declared text rules.
Two pointers|For sorted [1,2,4,7] and target 9, 1+7 is too small, so move left; 2+7 matches.
Remove duplicates|Compress [1,1,2,2,3] into unique prefix [1,2,3]. Return length 3; the remaining tail need not be meaningful.
Move zeroes|Move nonzero values in [0,1,0,3,12] forward while preserving order, then fill the tail: [1,3,12,0,0].
Maximum subarray|For [-2,1,-3,4,-1,2,1,-5,4], the best contiguous sum is 6 from [4,-1,2,1].
Product except self|For [1,2,3,4], prefix/suffix products yield [24,12,8,6] without division. Include zero and overflow cases.
Merge arrays|Merge [1,3] with [2,4] into spare capacity by filling from the end. This avoids overwriting unread values.
Valid palindrome|Under alphanumeric, case-insensitive rules, A man, a plan, a canal: Panama is a palindrome. State those rules first.
Longest substring|abcabcbb has longest distinct substring length 3. Track last-seen positions and advance the left bound monotonically.
Minimum window|For ADOBECODEBANC and required ABC, the minimum covering window is BANC. Counts must preserve repeated required characters too.
Sum windows|For positive [2,3,1,2,4,3], target at least 7 has shortest length 2 from [4,3]. Negatives invalidate this simple shrinking argument.
Prefix sums|For [2,4,1,3], prefix=[0,2,6,7,10]. Inclusive range 1..3 sums to prefix[4]-prefix[1]=8.
Subarray sums|For [1,1,1] and target 2, prefix-frequency counting finds two subarrays. Initialize frequency of prefix sum zero to one.
Valid parentheses|([]) matches nested openers with a stack. ([)] fails because the next closer does not match the top opener.
Min stack|Push 3, then 1, then 2. Minimum stays 1; after popping 2 and 1 it becomes 3 again.
Monotonic stack|For temperatures [73,74,71,75], unresolved indices form a stack. Warmer-day waits are [1,2,1,0].
Queue via stacks|Push 1 and 2 onto the input stack. Transfer only when the output stack is empty so pops return 1 then 2.
Linked-list reversal|Reverse 1→2→3 by saving next before changing each link. The final head is 3 and links are 3→2→1.
Cycle detection|A list loops from node 4 back to node 2. Slow/fast pointers eventually meet; an acyclic list reaches a null fast pointer.
Merge lists|Merge sorted 1→3 and 2→4 by repeatedly choosing the smaller head. Result: 1→2→3→4.
Remove nth|For 1→2→3→4→5 and n=2, remove node 4. A dummy head simplifies cases that remove the first node.
Tree traversal|For root 2 with children 1 and 3, inorder is [1,2,3], preorder [2,1,3], postorder [1,3,2].
Tree depth|A root with one child and one grandchild has depth 3 when counting nodes. State whether the problem counts edges instead.
BST validation|A node 6 inside the left subtree of root 5 violates the BST rule, even if its immediate parent allows it. Propagate ancestor bounds.
Lowest common ancestor|For two nodes in different root subtrees, their LCA is the root. If one target is an ancestor, that target can be the answer.
Serialize trees|Encode preorder values with null markers, such as 2,1,null,null,3,null,null. Markers preserve structure during decoding.
Graph representation|For sparse A→B and A→C, adjacency lists store just those neighbors. An adjacency matrix allocates every possible vertex pair.
Topological sort|If A must precede B and B precede C, [A,B,C] is valid. A dependency cycle means no complete topological ordering exists.
Dijkstra|With A→B weight 2, B→C weight 1, and A→C weight 5, the shortest A→C path costs 3. Nonnegative weights are required.
Union-find|Union A with B, then B with C. Finding A and C returns the same representative, indicating shared connectivity.
Grid search|For [[1,1,0],[0,1,0],[1,0,1]], four-direction connectivity gives three islands. Mark visited cells to avoid recounting.
Backtracking|For candidates [1,2,3], build subsets by choosing or skipping each item. Restore the temporary path after each branch.
Coin change|Coins [1,3,4] and amount 6 need two coins, 3+3. Define unreachable states and derive transitions from smaller amounts.
House robber|For [2,7,9,3,1], choose 2+9+1=12 without taking adjacent houses. Track best including/excluding each position.
Longest increasing subsequence|For [10,9,2,5,3,7,101,18], LIS length is 4, for example [2,3,7,18]. Elements need not be contiguous.
Merge intervals|Sort [1,3],[2,6],[8,10]. Under overlapping closed-interval semantics, merge the first two to [1,6].
Meeting rooms|Using half-open meetings [0,30),[5,10),[15,20), peak overlap is 2 rooms. An ending meeting can free a room at its end time.
Top-k frequent|For [1,1,1,2,2,3] and k=2, return 1 and 2. Define tie behavior before choosing heap or bucket selection.
LRU cache|With capacity 2, put A and B, get A, then put C. B is evicted because A became more recently used.
Text correctness|An emoji can occupy multiple code units while appearing as one character. Define bytes, code points, or grapheme clusters before indexing.
`);
if(learningExamples.size!==learningBank.length)throw Error('Every Q&A must have an example');
function addExampleCode(track,topic,language,code){const q=learningBank.find(q=>q.track===track&&q.topic===topic);Object.assign(learningExamples.get(q.id),{language,code});}
addExampleCode('ios','Swift values vs references','Swift',`struct Cart { var quantity: Int }
var original = Cart(quantity: 1)
var edited = original
edited.quantity = 2
// original.quantity is still 1`);
addExampleCode('ios','ARC and retain cycles','Swift · illustrative callback',`// Assume onFinish is an optional stored callback.
service.onFinish = { [weak self] in
    self?.renderFinishedState()
}
// Whether weak is correct depends on intended ownership.`);
addExampleCode('ios','Enums','Swift',`enum LoadState {
    case idle
    case loading
    case loaded([String])
    case failed(String)
}
// Switch over state to render each outcome explicitly.`);
addExampleCode('ios','MainActor and Sendable','Swift',`@MainActor
final class ScreenModel {
    var title = "Loading"
    func publish(title: String) {
        self.title = title
    }
}
// MainActor isolates state. Keep expensive work elsewhere.`);
addExampleCode('android','Coroutines and dispatchers','Kotlin · illustrative repository method',`suspend fun readDraft(): String = withContext(ioDispatcher) {
    draftFile.readText()
}
// Inject ioDispatcher; use a test dispatcher in tests.
// A suspend modifier alone does not move blocking I/O.`);
addExampleCode('android','Null safety','Kotlin',`val avatarUrl: String? = profile.avatarUrl
val displayedLabel = avatarUrl ?: "No avatar"
// Do not use avatarUrl!! unless its lifetime invariant proves it exists.`);
addExampleCode('android','Sealed models','Kotlin',`sealed interface LoginState {
    data object Idle : LoginState
    data object Loading : LoginState
    data class Success(val userId: String) : LoginState
    data class Error(val message: String) : LoginState
}`);
addExampleCode('android','State hoisting','Kotlin / Compose · component',`@Composable
fun TermsCheckbox(checked: Boolean, onChange: (Boolean) -> Unit) {
    Checkbox(checked = checked, onCheckedChange = onChange)
}
// The parent owns checked and passes onChange.`);
addExampleCode('rn','State immutability','TypeScript / React · inside a component',`const [items, setItems] = useState<string[]>([]);
function addItem(value: string) {
  setItems(previous => [...previous, value]);
}
// Create the new collection instead of mutating previous.`);
addExampleCode('rn','Effect dependencies','TypeScript / React · illustrative effect',`useEffect(() => {
  let disposed = false;
  loadProfile(userId).then(profile => {
    if (!disposed) setProfile(profile);
  }).catch(error => {
    if (!disposed) setError(error);
  });
  return () => { disposed = true; };
}, [userId]);
// Assume loadProfile is stable. This ignores stale results,
// but does not cancel network work; use supported cancellation too.`);
addExampleCode('rn','Nullish coalescing','TypeScript',`const quantity = 0;
const correct = quantity ?? 1; // 0
const wrongForThisCase = quantity || 1; // 1
// Nullish defaulting preserves valid falsey values.`);
addExampleCode('architecture','Idempotency keys','Protocol sketch',`POST /orders
Idempotency-Key: checkout-operation-42

Retry uses the SAME key for the SAME logical operation.
Server checks identity, payload and stored result atomically.
Do not reuse this key for a different order.`);
addExampleCode('cloud','SQS visibility','Timeline example',`t=0: worker A receives message; visibility window starts.
t=30: window expires before A finishes.
t=31: worker B can receive the same message.

Extend visibility when appropriate, handle timeouts,
and deduplicate the business action durably.`);
addExampleCode('ai','Deterministic checks','Python · illustrative validator',`def valid_total(items, claimed_total):
    # Use integer minor units here, not floating-point prices.
    return sum(item["price_minor"] * item["quantity"]
               for item in items) == claimed_total

# Validate types, allowed quantities and field presence too.
# A schema-valid model response can still fail this check.`);
addExampleCode('staff','Architecture decisions','ADR outline',`Context: foreground updates must be timely; background execution is limited.
Options: polling, WebSocket, push + fetch.
Decision: socket when active, cursor recovery on reconnect, fetch on activation.
Tradeoffs: connection lifecycle and replay complexity.
Verification: offline, suspension, duplicate events, measured energy.
Review trigger: changed freshness or scale requirements.`);
addExampleCode('dsa','Two Sum','Python',`def two_sum(values, target):
    seen = {}
    for i, value in enumerate(values):
        complement = target - value
        if complement in seen:
            return [seen[complement], i]
        seen[value] = i
    return None

# two_sum([2, 7, 11, 15], 9) -> [0, 1]`);
addExampleCode('dsa','Binary search','Python',`def binary_search(values, target):
    low, high = 0, len(values) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if values[mid] == target:
            return mid
        if values[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# binary_search([1, 3, 5, 7, 9], 7) -> 3`);
addExampleCode('dsa','Prefix sums','Python',`values = [2, 4, 1, 3]
prefix = [0]
for value in values:
    prefix.append(prefix[-1] + value)

left, right = 1, 3 # inclusive bounds
range_sum = prefix[right + 1] - prefix[left] # 8`);
addExampleCode('dsa','Coin change','Python',`def minimum_coins(coins, amount):
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0
    for subtotal in range(1, amount + 1):
        for coin in coins: # assume strictly positive integer coins
            if coin <= subtotal:
                dp[subtotal] = min(dp[subtotal], dp[subtotal - coin] + 1)
    return -1 if dp[amount] == float("inf") else dp[amount]

# minimum_coins([1, 3, 4], 6) -> 2`);
for(const q of learningBank)q.example=learningExamples.get(q.id);
function learningExampleHTML(q){const e=q.example;if(!e)return '';return `<aside class="qa-example"><p class="label">EXAMPLE / MAKE IT CONCRETE</p><p>${esc(e.text)}</p>${e.code?`<details class="example-code"><summary>Show ${esc(e.language)} example</summary><p class="muted">Illustrative snippet; adapt imports, surrounding types and SDK details to your project.</p><pre><code>${esc(e.code)}</code></pre></details>`:''}</aside>`;}
